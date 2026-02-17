import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, FileText, TrendingUp, MessageSquare } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format, subMonths, startOfMonth } from "date-fns";
import { Loader2 } from "lucide-react";

const STATUS_COLORS: Record<string, string> = {
  new: "hsl(217, 91%, 60%)",
  contacted: "hsl(45, 93%, 47%)",
  qualified: "hsl(142, 71%, 45%)",
  closed: "hsl(0, 0%, 60%)",
};

const Dashboard = () => {
  const { data: leads = [], isLoading } = useQuery({
    queryKey: ["admin-leads"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  // Compute real stats
  const now = new Date();
  const thirtyDaysAgo = subMonths(now, 1);
  const recentLeads = leads.filter((l) => new Date(l.created_at) >= thirtyDaysAgo);

  const stats = [
    { label: "Total Leads", value: leads.length.toString(), icon: MessageSquare, change: `${recentLeads.length} this month` },
    { label: "New", value: leads.filter((l) => l.status === "new").length.toString(), icon: Users, change: "" },
    { label: "Qualified", value: leads.filter((l) => l.status === "qualified").length.toString(), icon: TrendingUp, change: "" },
    { label: "Closed", value: leads.filter((l) => l.status === "closed").length.toString(), icon: FileText, change: "" },
  ];

  // Leads over time (last 6 months)
  const leadsOverTime = Array.from({ length: 6 }, (_, i) => {
    const month = subMonths(now, 5 - i);
    const start = startOfMonth(month);
    const end = startOfMonth(subMonths(now, 4 - i));
    const count = leads.filter((l) => {
      const d = new Date(l.created_at);
      return d >= start && d < (i === 5 ? new Date(8640000000000000) : end);
    }).length;
    return { month: format(start, "MMM"), leads: count };
  });

  // Status distribution
  const statusData = Object.entries(
    leads.reduce<Record<string, number>>((acc, l) => {
      acc[l.status] = (acc[l.status] || 0) + 1;
      return acc;
    }, {})
  ).map(([name, value]) => ({ name, value }));

  // Leads by service (top 6)
  const serviceData = Object.entries(
    leads.reduce<Record<string, number>>((acc, l) => {
      acc[l.service] = (acc[l.service] || 0) + 1;
      return acc;
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([service, count]) => ({ service, count }));

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Real-time overview of your leads</p>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  {stat.change && <span className="text-xs font-medium text-primary">{stat.change}</span>}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <stat.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Leads Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={leadsOverTime}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Line type="monotone" dataKey="leads" stroke="hsl(var(--primary))" strokeWidth={2} dot={{ fill: "hsl(var(--primary))" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Leads by Service</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={serviceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="service" stroke="hsl(var(--muted-foreground))" fontSize={10} angle={-20} textAnchor="end" height={60} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} allowDecimals={false} />
                <Tooltip
                  contentStyle={{
                    background: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                    color: "hsl(var(--foreground))",
                  }}
                />
                <Bar dataKey="count" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Lead Status Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-center">
              <ResponsiveContainer width="100%" height={260}>
                <PieChart>
                  <Pie data={statusData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label={({ name, value }) => `${name} (${value})`}>
                    {statusData.map((entry) => (
                      <Cell key={entry.name} fill={STATUS_COLORS[entry.name] || "hsl(var(--primary))"} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
