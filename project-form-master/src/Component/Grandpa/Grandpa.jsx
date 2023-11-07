import { createContext } from 'react';
import Aunt from '../Aunt/Aunt';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const AssetContext = createContext("Gold");
const Grandpa = () => {
    const ring = "Diamond";
    return (
        <div className="grandpa">
            <div>
                <h2>Grandpa</h2>
                <AssetContext.Provider value='Gold'>
                    <section className='flex'>
                        <Dad ring={ring}></Dad>
                        <Aunt ring={ring}></Aunt>
                        <Uncle></Uncle>
                    </section>
                </AssetContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;