import {Card, CardImg, CardImgOverlay, CardTitle} from "reactstrap";

function Menu({dishes, onClick}) {

    const menu = dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-2">
                    <Card onClick={() => onClick(dish.id)}>
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
        </div>
    );

}

export default Menu;