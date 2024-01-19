import { Button } from "@nextui-org/react"
import { PostItem } from "./PostItem"

export const PostsList = () => {
    const list = [1, 2, 3, 4, 5, 6]

    return (
        <section id="posts" className="container mt-32 md:mt-60 lg:mt-20 flex flex-col items-center gap-5">
            <h4 className="font-bold text-2xl self-start">Latest Post</h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {list.map((post, index) => (
                    <li key={post + index}>
                        <PostItem />
                    </li>
                ))}
            </ul>
            <Button className="mb-5 bg-white dark:bg-dark border-1 border-[#696A754D] dark:border-dark-light font-semibold dark:text-[#696A75]">View All Post</Button>
        </section>
    )
}