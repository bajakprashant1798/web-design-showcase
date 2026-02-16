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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Search, Mail, Loader2, Phone, Building, Calendar, MessageSquare } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import type { Tables } from "@/integrations/supabase/types";

type Lead = Tables<"leads">;

const LeadManagement = () => {
  const [search, setSearch] = useState("");
  const [serviceFilter, setServiceFilter] = useState("all");
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

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

  const services = [...new Set(leads.map((l) => l.service))];

  const filtered = leads.filter((l) => {
    const matchesSearch =
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase()) ||
      (l.company?.toLowerCase().includes(search.toLowerCase()) ?? false);
    const matchesService = serviceFilter === "all" || l.service === serviceFilter;
    return matchesSearch && matchesService;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Lead Management</h1>
          <p className="text-sm text-muted-foreground">{leads.length} leads total</p>
        </div>
        <Button>
          <Mail className="mr-2 h-4 w-4" />
          Export Leads
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative max-w-sm flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search by name, email, or company..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={serviceFilter} onValueChange={setServiceFilter}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filter by service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Services</SelectItem>
                {services.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              {leads.length === 0 ? "No leads yet." : "No leads match your filters."}
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Company</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((lead) => (
                  <TableRow
                    key={lead.id}
                    className="cursor-pointer"
                    onClick={() => setSelectedLead(lead)}
                  >
                    <TableCell className="font-medium">{lead.name}</TableCell>
                    <TableCell className="text-muted-foreground">{lead.email}</TableCell>
                    <TableCell className="text-muted-foreground">{lead.company || "—"}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{lead.service}</Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {format(new Date(lead.created_at), "MMM d, yyyy")}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <Dialog open={!!selectedLead} onOpenChange={(open) => !open && setSelectedLead(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-heading">Lead Details</DialogTitle>
          </DialogHeader>
          {selectedLead && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Name</p>
                  <p className="font-medium text-foreground">{selectedLead.name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Email</p>
                  <a href={`mailto:${selectedLead.email}`} className="font-medium text-primary hover:underline flex items-center gap-1">
                    <Mail className="h-3.5 w-3.5" />
                    {selectedLead.email}
                  </a>
                </div>
                {selectedLead.phone && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Phone</p>
                    <p className="font-medium text-foreground flex items-center gap-1">
                      <Phone className="h-3.5 w-3.5 text-muted-foreground" />
                      {selectedLead.phone}
                    </p>
                  </div>
                )}
                {selectedLead.company && (
                  <div className="space-y-1">
                    <p className="text-xs text-muted-foreground">Company</p>
                    <p className="font-medium text-foreground flex items-center gap-1">
                      <Building className="h-3.5 w-3.5 text-muted-foreground" />
                      {selectedLead.company}
                    </p>
                  </div>
                )}
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Service</p>
                  <Badge variant="secondary">{selectedLead.service}</Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-muted-foreground">Submitted</p>
                  <p className="font-medium text-foreground flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
                    {format(new Date(selectedLead.created_at), "MMM d, yyyy 'at' h:mm a")}
                  </p>
                </div>
              </div>
              <div className="space-y-1 pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <MessageSquare className="h-3.5 w-3.5" /> Message
                </p>
                <p className="text-foreground whitespace-pre-wrap text-sm leading-relaxed">
                  {selectedLead.message}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LeadManagement;
