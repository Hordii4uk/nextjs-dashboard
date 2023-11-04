import { fetchInvoicesPages } from '@/app/lib/data';

export default function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  },
}) {
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = fetchInvoicesPages(query);

  return <p>Invoices Page</p>;
}