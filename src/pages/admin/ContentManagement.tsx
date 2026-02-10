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
import { Search, Plus, MoreHorizontal, Eye } from "lucide-react";

const mockContent = [
  { id: 1, title: "SEO Best Practices 2024", type: "Blog", status: "published", author: "John Doe", date: "2024-06-01", views: 1240 },
  { id: 2, title: "PPC Campaign Guide", type: "Blog", status: "draft", author: "Jane Smith", date: "2024-06-05", views: 0 },
  { id: 3, title: "Social Media Strategy", type: "Case Study", status: "published", author: "Alice Brown", date: "2024-05-20", views: 890 },
  { id: 4, title: "Email Marketing Tips", type: "Blog", status: "published", author: "Bob Wilson", date: "2024-05-15", views: 560 },
  { id: 5, title: "Website Redesign ROI", type: "Case Study", status: "review", author: "Charlie Davis", date: "2024-06-10", views: 0 },
];

const ContentManagement = () => {
  const [search, setSearch] = useState("");

  const filtered = mockContent.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  const statusColor = (status: string) => {
    switch (status) {
      case "published": return "bg-primary/10 text-primary border-0";
      case "draft": return "bg-muted text-muted-foreground border-0";
      case "review": return "bg-accent/10 text-accent border-0";
      default: return "";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">Content Management</h1>
          <p className="text-sm text-muted-foreground">{mockContent.length} items</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Content
        </Button>
      </div>

      <Card>
        <CardHeader className="pb-3">
          <div className="relative max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search content..."
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
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Author</TableHead>
                <TableHead>Views</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filtered.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{item.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={statusColor(item.status)}>{item.status}</Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.author}</TableCell>
                  <TableCell>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Eye className="h-3 w-3" />
                      {item.views.toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell className="text-muted-foreground">{item.date}</TableCell>
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

export default ContentManagement;
