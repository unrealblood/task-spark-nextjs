import Header from "./components/header/Header";
import "./globals.css";

export const metadata = {
  title: "Task Demon",
  description: "This is a todo web application.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`h-full antialiased`}>
        <body>
          <div className="flex justify-start items-start">
            <Header />

            {children}
          </div>
        </body>
    </html>
  );
}
