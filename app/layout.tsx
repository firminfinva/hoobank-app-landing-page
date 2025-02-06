import "@/styles/globals.css";
import { Navbar } from "@components";
import styles from "@styles/style";
export const metadata = {
  title: "HooBank",
  description:
    "Hoobank is an Modern Landing Page built with Next JS and Typescript",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
