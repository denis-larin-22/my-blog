import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Greetings, Footer, Header, LastPost, PostsList } from './index';
import { AddNewPost } from './admin/AddNewPost';

function App() {
    const [toggleVissible, setToggleVissible] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setToggleVissible(false);
        }, 2000)
    }, [toggleVissible])

    return (
        <>
            {!isAdmin ?
                <motion.div layout className="App min-h-screen flex flex-col dark:bg-dark dark:text-white-matte overflow-hidden">
                    <AnimatePresence>
                        {toggleVissible && <Greetings />}
                        {!toggleVissible && <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            <Header />
                            <LastPost />
                            <PostsList />
                            <Footer authAdmin={setIsAdmin} />
                        </motion.div>}
                    </AnimatePresence>
                </motion.div>
                :
                <AddNewPost toggleAdminState={setIsAdmin} />
            }
        </>
    );
}
export default App;