import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from "reactstrap";
import {useState} from "react";

function Menu({dishes}) {
    const [data, setDishes] = useState(dishes)
    const [selectedDish, setSelectedDish] = useState(null)

    function onDishSelect(dish) {
        setSelectedDish(dish)
    }
    function renderDish(dish){
        if(dish != null){
            return(
                <Card>
                    <CardImg width='100%' object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        } else{
            return <div> </div>
        }
    }

    const menu = data.map((dish) => {
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
            <div className='row'>
                {renderDish(selectedDish)}
            </div>

        </div>
    );

}

export default Menu;