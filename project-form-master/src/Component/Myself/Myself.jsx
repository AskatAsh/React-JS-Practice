import Special from "../Special/Special";

const Myself = ({ring}) => {
    return (
        <div>
            <h2>Myself</h2>
            <section className="flex">
                <Special ring={ring}></Special>
            </section>
        </div>
    );
};

export default Myself;