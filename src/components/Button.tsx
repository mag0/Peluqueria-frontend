type ButtonProps = {
    title: string
    children?: React.ReactNode
    styles?: string
    color?: string
    onClick?: () => void
}

export const Button = ({ title, children, styles, color, onClick }: ButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex gap-2 items-center transition-colors duration-300 cursor-pointer rounded border-2 
        border-(${color || '--color-button'}) hover:bg-(--color-button)
        ${styles ? styles : "px-4 py-2"}`}
        >
            {title}
            {children}
        </button>
    )
}
