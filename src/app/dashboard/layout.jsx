import Sidebar from '../../components/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-10 overflow-hidden">
        {children}
      </div>
    </div>
  );
}

