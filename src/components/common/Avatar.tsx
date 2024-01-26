type SizeVariants = 'large' | 'small';

interface IProps {
    size: SizeVariants
}

const Avatar = ({ size }: IProps) => {
    const sizeStyles = size === 'large' ? 'w-16 h-16' : 'w-9 h-9';

    return (
        <img src={process.env.PUBLIC_URL + '/assets/me.jpg'} alt="Author logo" className={`${sizeStyles} rounded-full border-3 border-black dark:border-white-matte`} />
    )
}

export default Avatar;