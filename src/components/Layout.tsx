import React, { PropsWithChildren } from "react";
type LayoutProps = PropsWithChildren<{ className?: string | undefined }>;
// export default function Layout({ className = "" }: PropsWithChildren) {
//     return <div className="container mx-auto">{children}</div>;
// }

export const Layout: React.FC<PropsWithChildren<LayoutProps>> = ({
    className = "",
    ...props
}) => {
    return (
        <>
            <div className={`container mx-auto ${className ?? ""}`}>
                {props.children}
            </div>
        </>
    );
};

export default Layout;
