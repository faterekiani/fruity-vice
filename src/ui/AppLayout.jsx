/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Spinner from "./Spinner";

function AppLayout() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] ">
      {isLoading && <Spinner />}

      <header className="bg-red-600">
        <Header />
      </header>

      <div className="overflow-scroll">
        <main className="mx-auto max-w-6xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
