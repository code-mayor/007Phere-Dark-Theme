import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
    Card, CardContent, CardHeader, CardTitle
} from '../ui/card';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    Search,
    Download,
    Eye,
    Filter,
    RefreshCw,
    LogOut,
    Users,
    TrendingUp,
    Clock,
    CheckCircle,
} from 'lucide-react';

// Initialize Supabase client
const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_ANON_KEY
);

interface Submission {
    id: string;
    created_at: string;
    name: string;
    email: string;
    phone: string;
    selected_services: string[];
    message: string | null;
    status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'archived';
    consent: boolean;
    age_verification: boolean;
}

interface Stats {
    total: number;
    new: number;
    in_progress: number;
    completed: number;
    this_month: number;
    this_week: number;
}

const AdminDashboard: React.FC = () => {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [stats, setStats] = useState<Stats | null>(null);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');
    const [selectedSubmission, setSelectedSubmission] = useState<Submission | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Authentication check
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
            setIsAuthenticated(true);
            fetchSubmissions();
            fetchStats();
        } else {
            // Redirect to login
            window.location.href = '/admin/login';
        }
    };

    const fetchSubmissions = async () => {
        setLoading(true);
        try {
            let query = supabase
                .from('form_submissions')
                .select('*')
                .order('created_at', { ascending: false });

            if (statusFilter !== 'all') {
                query = query.eq('status', statusFilter);
            }

            const { data, error } = await query;

            if (error) throw error;
            setSubmissions(data || []);
        } catch (error) {
            console.error('Error fetching submissions:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchStats = async () => {
        try {
            const { data, error } = await supabase.rpc('get_submission_stats');
            if (error) throw error;
            setStats(data);
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            fetchSubmissions();
        }
    }, [statusFilter, isAuthenticated]);

    const handleStatusUpdate = async (id: string, newStatus: string) => {
        try {
            const { error } = await supabase
                .from('form_submissions')
                .update({ status: newStatus })
                .eq('id', id);

            if (error) throw error;
            fetchSubmissions();
            fetchStats();
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const exportToCSV = () => {
        const headers = ['Date', 'Name', 'Email', 'Phone', 'Services', 'Status', 'Message'];
        const rows = filteredSubmissions.map(sub => [
            new Date(sub.created_at).toLocaleDateString(),
            sub.name,
            sub.email,
            sub.phone,
            sub.selected_services.join('; '),
            sub.status,
            sub.message || 'N/A',
        ]);

        const csv = [
            headers.join(','),
            ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
        ].join('\n');

        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `007phere-submissions-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        window.location.href = '/admin/login';
    };

    const filteredSubmissions = submissions.filter(sub =>
        sub.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        sub.phone.includes(searchTerm)
    );

    if (!isAuthenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-foreground font-serif">
                            007Phere Admin Dashboard
                        </h1>
                        <p className="text-muted-foreground mt-1">
                            Manage client submissions and inquiries
                        </p>
                    </div>
                    <Button
                        variant="ghost"
                        onClick={handleLogout}
                        className="flex items-center space-x-2"
                    >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                    </Button>
                </div>

                {/* Stats Cards */}
                {stats && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <Card className="border border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Total Submissions</p>
                                        <p className="text-3xl font-bold text-foreground">{stats.total}</p>
                                    </div>
                                    <Users className="w-8 h-8 text-primary" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">New Inquiries</p>
                                        <p className="text-3xl font-bold text-blue-600">{stats.new}</p>
                                    </div>
                                    <Clock className="w-8 h-8 text-blue-600" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">In Progress</p>
                                        <p className="text-3xl font-bold text-orange-600">
                                            {stats.in_progress}
                                        </p>
                                    </div>
                                    <TrendingUp className="w-8 h-8 text-orange-600" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border border-border">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground">This Month</p>
                                        <p className="text-3xl font-bold text-green-600">
                                            {stats.this_month}
                                        </p>
                                    </div>
                                    <CheckCircle className="w-8 h-8 text-green-600" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}

                {/* Filters & Actions */}
                <Card className="border border-border mb-6">
                    <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                    <Input
                                        placeholder="Search by name, email, or phone..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                            </div>

                            <select
                                value={statusFilter}
                                onChange={(e) => setStatusFilter(e.target.value)}
                                className="px-4 py-2 rounded-lg border border-border bg-background"
                            >
                                <option value="all">All Status</option>
                                <option value="new">New</option>
                                <option value="contacted">Contacted</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="archived">Archived</option>
                            </select>

                            <Button
                                onClick={fetchSubmissions}
                                variant="outline"
                                className="flex items-center space-x-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                <span>Refresh</span>
                            </Button>

                            <Button
                                onClick={exportToCSV}
                                className="flex items-center space-x-2 bg-primary"
                            >
                                <Download className="w-4 h-4" />
                                <span>Export CSV</span>
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Submissions Table */}
                <Card className="border border-border">
                    <CardHeader>
                        <CardTitle className="flex items-center justify-between">
                            <span>Recent Submissions</span>
                            <span className="text-sm text-muted-foreground font-normal">
                                {filteredSubmissions.length} results
                            </span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="text-center py-12">
                                <RefreshCw className="w-8 h-8 animate-spin mx-auto text-primary" />
                                <p className="text-muted-foreground mt-4">Loading submissions...</p>
                            </div>
                        ) : filteredSubmissions.length === 0 ? (
                            <div className="text-center py-12">
                                <p className="text-muted-foreground">No submissions found</p>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead className="border-b border-border">
                                        <tr>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                                                Date
                                            </th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                                                Name
                                            </th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                                                Contact
                                            </th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                                                Services
                                            </th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                                                Status
                                            </th>
                                            <th className="text-left p-4 text-sm font-medium text-muted-foreground">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredSubmissions.map((submission) => (
                                            <tr
                                                key={submission.id}
                                                className="border-b border-border hover:bg-secondary/50 transition-colors"
                                            >
                                                <td className="p-4 text-sm">
                                                    {new Date(submission.created_at).toLocaleDateString('en-IN', {
                                                        day: 'numeric',
                                                        month: 'short',
                                                        year: 'numeric',
                                                    })}
                                                </td>
                                                <td className="p-4">
                                                    <div>
                                                        <p className="font-medium text-foreground">
                                                            {submission.name}
                                                        </p>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-sm">
                                                    <div className="space-y-1">
                                                        <p className="text-foreground">{submission.email}</p>
                                                        <p className="text-muted-foreground">{submission.phone}</p>
                                                    </div>
                                                </td>
                                                <td className="p-4 text-sm">
                                                    <div className="flex flex-wrap gap-1">
                                                        {submission.selected_services.slice(0, 2).map((service) => (
                                                            <span
                                                                key={service}
                                                                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded"
                                                            >
                                                                {service}
                                                            </span>
                                                        ))}
                                                        {submission.selected_services.length > 2 && (
                                                            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                                                                +{submission.selected_services.length - 2}
                                                            </span>
                                                        )}
                                                    </div>
                                                </td>
                                                <td className="p-4">
                                                    <select
                                                        value={submission.status}
                                                        onChange={(e) =>
                                                            handleStatusUpdate(submission.id, e.target.value)
                                                        }
                                                        className={`px-3 py-1 rounded-full text-xs font-medium border ${submission.status === 'new'
                                                            ? 'bg-blue-50 text-blue-700 border-blue-200'
                                                            : submission.status === 'contacted'
                                                                ? 'bg-purple-50 text-purple-700 border-purple-200'
                                                                : submission.status === 'in_progress'
                                                                    ? 'bg-orange-50 text-orange-700 border-orange-200'
                                                                    : submission.status === 'completed'
                                                                        ? 'bg-green-50 text-green-700 border-green-200'
                                                                        : 'bg-gray-50 text-gray-700 border-gray-200'
                                                            }`}
                                                    >
                                                        <option value="new">New</option>
                                                        <option value="contacted">Contacted</option>
                                                        <option value="in_progress">In Progress</option>
                                                        <option value="completed">Completed</option>
                                                        <option value="archived">Archived</option>
                                                    </select>
                                                </td>
                                                <td className="p-4">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => setSelectedSubmission(submission)}
                                                    >
                                                        <Eye className="w-4 h-4" />
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Detail Modal */}
                {selectedSubmission && (
                    <div
                        className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedSubmission(null)}
                    >
                        <Card
                            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <CardHeader className="border-b border-border">
                                <CardTitle className="flex items-center justify-between">
                                    <span>Submission Details</span>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={() => setSelectedSubmission(null)}
                                    >
                                        ✕
                                    </Button>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Name
                                    </label>
                                    <p className="text-foreground">{selectedSubmission.name}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Email
                                    </label>
                                    <p className="text-foreground">{selectedSubmission.email}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Phone
                                    </label>
                                    <p className="text-foreground">{selectedSubmission.phone}</p>
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Services Requested
                                    </label>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {selectedSubmission.selected_services.map((service) => (
                                            <span
                                                key={service}
                                                className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                                            >
                                                {service}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                {selectedSubmission.message && (
                                    <div>
                                        <label className="text-sm font-medium text-muted-foreground">
                                            Message
                                        </label>
                                        <p className="text-foreground mt-1 p-4 bg-secondary/50 rounded-lg">
                                            {selectedSubmission.message}
                                        </p>
                                    </div>
                                )}
                                <div>
                                    <label className="text-sm font-medium text-muted-foreground">
                                        Submitted
                                    </label>
                                    <p className="text-foreground">
                                        {new Date(selectedSubmission.created_at).toLocaleString('en-IN')}
                                    </p>
                                </div>
                                <div className="flex items-center space-x-4 pt-4 border-t border-border">
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span className="text-sm text-muted-foreground">
                                            Age Verified
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                        <span className="text-sm text-muted-foreground">
                                            Consent Given
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;