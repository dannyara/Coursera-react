import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from "reactstrap";
import {useState} from "react";
import DishdetailComponent from "./DishdetailComponent";

function Menu({dish_data}) {
    const [dishes, setDishes] = useState(dish_data)
    const [selectedDish, setSelectedDish] = useState(null)

    function onDishSelect(dish) {
        setSelectedDish(dish)
    }
    function renderDish(dish){
        return(
            <DishdetailComponent dish={dish}/>
        )
    }

    const menu = dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <Card onClick={() => onDishSelect(dish)}>
                        <CardImg width='100%' object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className='ml-5'>
                            <CardTitle heading> {dish.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        }
    );
    return (
        <div className={'container'}>
            <div className='row'>
                {menu}
            </div>
            <div>
                {renderDish(selectedDish)}
            </div>

        </div>
    );

}

export default Menu;