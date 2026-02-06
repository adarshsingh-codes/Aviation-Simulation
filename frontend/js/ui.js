import { Navbar } from "../components/navbar.js";
import { Sidebar } from "../components/sidebar.js";

export function loadLayout() {
  document.body.insertAdjacentHTML("afterbegin", Navbar());
  document.body.insertAdjacentHTML("afterbegin", Sidebar());
}
