import Aunt from '../Aunt/Aunt';
import Dad from '../Dad/Dad';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css'
const Grandpa = () => {
    const ring = "Diamond";
    return (
        <div className="grandpa">
            <div>
                <h2>Grandpa</h2>
                <section className='flex'>
                    <Dad ring={ring}></Dad>
                    <Aunt ring={ring}></Aunt>
                    <Uncle></Uncle>
                </section>
            </div>
        </div>
    );
};

export default Grandpa;