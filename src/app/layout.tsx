import "./globals.css";
import { Inter } from "next/font/google";
import store from "@/store/store";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "BiteSpeed",
	description: "Created by Dipak Patil (dipakpatil2415@gmail.com)",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
