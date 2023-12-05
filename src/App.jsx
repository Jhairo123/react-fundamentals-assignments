import { Menu } from "./components/Menu";

export function AppRouter() {
  return (
    <>
      <Menu />
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/events/:eventId" element={<EventDetailPage />} />
        <Route path="/events/:eventId/tickets/:priceId" element={<TicketPaymentPage />} />
      </Routes>
    </>
  );
}

export function App() {
  return (
    <Router>
      <div>
        <AppRouter />
      </div>
    <Router/>
  );
}
