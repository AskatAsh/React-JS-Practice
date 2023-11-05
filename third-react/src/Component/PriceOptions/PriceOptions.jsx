import PriceOption from "../PriceOption/PriceOption";
import './PriceOptions.css'
const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 29.99,
            "features": [
                "Access to cardio and weightlifting equipment",
                "Unlimited access during business hours",
                "Locker room access",
                "Monthly fitness assessment",
                "Access to online workout videos",
                "Discounts on gym merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 49.99,
            "features": [
                "All features of Basic Membership",
                "Access to basic group fitness classes",
                "Access to swimming pool",
                "Personal trainer consultation",
                "Sauna and spa access",
                "Nutritional consultation",
                "Discounts on sports equipment"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 79.99,
            "features": [
                "All features of Standard Membership",
                "Unlimited 24/7 gym access",
                "Family membership option (up to 4 family members)",
                "Childcare services",
                "Priority booking for classes and facilities",
                "Complimentary towel service",
                "Access to premium fitness workshops"
            ]
        }
    ]

    return (
        <div>
            <h3 className='text-5xl font-bold text-center my-10'>Best Price Options</h3>
            <div className="price_option pt-5">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;