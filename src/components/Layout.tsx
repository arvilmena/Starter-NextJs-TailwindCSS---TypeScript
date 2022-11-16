import React from "react";
export default function Layout({ children }: React.PropsWithChildren) {
    return <div className="container mx-auto">{children}</div>;
}
