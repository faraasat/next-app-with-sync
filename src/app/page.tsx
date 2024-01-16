import CounterComponent from "./components/counter";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-[100vh] min-h-[400px] items-center justify-center gap-16">
      <div className="text-center">
        <h1 className="text-2xl font-bold leading-7 text-gray-900">
          Tab Sync Example
        </h1>
        <p>Open this page in multiple tabs and see how the state is synced.</p>
      </div>
      <CounterComponent />
    </main>
  );
}
