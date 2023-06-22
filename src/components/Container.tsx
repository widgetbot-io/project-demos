interface ContainerProps {
    children: React.ReactNode;
};

export default function Container (props: ContainerProps) {
    const { children } = props;

    return (
        <div className="container max-w-7xl mx-auto">
            {children}
        </div>
    )
};