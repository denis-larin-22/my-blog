import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Greetings, Footer, Header, LastPost, PostsList } from './components';

function App() {
  const [toggleVissible, setToggleVissible] = React.useState(true);
  useEffect(() => {
    setTimeout(() => {
      setToggleVissible(false);
    }, 2000)
  }, [toggleVissible])

  return (
    <motion.div layout className="App min-h-screen flex flex-col dark:bg-dark dark:text-white-matte">
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
          {/* <Footer /> */}
        </motion.div>}
      </AnimatePresence>
    </motion.div >
  );
}

export default App;
