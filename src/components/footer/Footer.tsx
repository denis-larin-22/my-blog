export const Footer = () => {
    return (
        <div className="bg-[#F6F6F7] dark:bg-dark-high p-5 dark:text-gray-text">
            <footer className="container flex justify-between">
                <div className="max-w-80">
                    <h6 className="font-semibold text-lg ">About</h6>
                    <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>

                </div>
                <div className="">
                    <p className="font-semibold text-lg">Contacts</p>
                    <p className="">Email: info@jstemplate.net</p>
                    <p className="">Phone: 880 123 456 789</p>
                </div>
                <div className="">
                    <p className="font-semibold text-lg">Category</p>
                    <ul className="">
                        <li className="">Travel</li>
                        <li className="">Travel</li>
                        <li className="">Travel</li>
                        <li className="">Travel</li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}