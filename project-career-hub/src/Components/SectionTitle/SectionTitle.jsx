import PropTypes from 'prop-types';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div>
            <h2 className="text-center text-5xl font-extrabold mb-4 mt-32">{title}</h2>
            <p className="text-[#757575] text-center">{subtitle}</p>
        </div>
    );
};


SectionTitle.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
};
export default SectionTitle;