import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, MoreHorizontal, Mail } from "lucide-react";

const mockLeads = [
  { id: 1, name: "Acme Corp", contact: "sarah@acme.com", source: "Organic", status: "new", value: "$12,000", date: "2024-06-12" },
  { id: 2, name: "TechStart Inc", contact: "mike@techstart.io", source: "PPC", status: "contacted", value: "$8,500", date: "2024-06-10" },
  { id: 3, name: "GreenLeaf LLC", contact: "anna@greenleaf.com", source: "Referral", status: "qualified", value: "$25,000", date: "2024-06-08" },
  { id: 4, name: "BlueSky Media", contact: "tom@bluesky.co", source: "Social", status: "proposal", value: "$15,000", date: "2024-06-05" },
  { id: 5, name: "Swift Solutions", contact: "jen@swift.dev", source: "Organic", status: "new", value: "$6,000", date: "2024-06-13" },
];

const LeadManagement = () => {
  const [search, setSearch] = useState("");

  const filtered = mockLeads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.contact.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-primary/10 text-primary border-0";
      case "contacted": return "bg-accent/10 text-accent border-0";
      case "qualified": return "bg-secondary text-secondary-foreground";
      case "proposal": return "bg-muted text-foreground border-0";
      default: return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Lead Management</h1>
          <p className="text-sm text-muted-foreground">{mockLeads.length} leads in pipeline</p>
        </div>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Export Leads
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search leads..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Company</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Source</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((lead) => (
                <TableRow key={lead.id}>
                  <TableCell className="font-medium">{lead.name}</TableCell>
                  <TableCell className="text-muted-foreground">{lead.contact}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{lead.source}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColor(lead.status)}>{lead.status}</Badge>
                  </TableCell>
                  <TableCell className="font-medium">{lead.value}</TableCell>
                  <TableCell className="text-muted-foreground">{lead.date}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default LeadManagement;
