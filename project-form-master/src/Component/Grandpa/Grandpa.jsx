import { createContext, useState } from 'react';
import Aunt from '../Aunt/Aunt';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'

export const AssetContext = createContext("Gold");
export const MoneyContext = createContext(1000);
const Grandpa = () => {
    const [money, setMoney] = useState(1000);
    const ring = "Diamond";
    return (
        <div className="grandpa">
            <div>
                <h2>Grandpa</h2>
                <p>Total: {money}</p>
                <MoneyContext.Provider value={[money, setMoney]}>
                    <AssetContext.Provider value='Gold'>
                        <section className='flex'>
                            <Dad ring={ring}></Dad>
                            <Aunt ring={ring}></Aunt>
                            <Uncle></Uncle>
                        </section>
                    </AssetContext.Provider>
                </MoneyContext.Provider>
            </div>
        </div>
    );
};

export default Grandpa;