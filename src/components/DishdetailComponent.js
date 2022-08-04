import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, ListGroupItem} from "reactstrap";
import {useState} from "react";


function DishDetail({dish}) {

    const renderDishes =() => {
        return(
                <Card>
                    <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle> {dish.name}</CardTitle>
                        <CardText> {dish.description}</CardText>
                    </CardBody>
                </Card>

        )
    }


    if (dish != null) {
        const renderComments = dish.comments.map((comment) => {
            if(dish.comments!= null){
                let options = { year: 'numeric', month: 'short', day: 'numeric' };
                const date = new Date(comment.date )
                return(
                    <ul key={comment.id} className={'list-unstyled'}>
                        <li>
                            <div> {comment.comment}</div>
                            <div> -- {comment.author}, {date.toLocaleDateString("en-US", options)}</div>
                        </li>
                    </ul>
                )
            }
            else{ return <div> </div>}
        })

        return (
            <div className={'row'}>
                <div className='col-12 col-md-5 m-1'>
                    {renderDishes()}
                </div>
                <div  className='col-12 col-md-5 m-1'>
                    <h4> Comments</h4>
                    {renderComments}
                </div>
            </div>
        )
    } else {
        return <div> </div>
    }
}
 export default DishDetail;