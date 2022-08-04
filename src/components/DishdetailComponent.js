import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody} from "reactstrap";
import {useState} from "react";


function DishDetail({dish}) {

    const renderDishes =() => {
        return(
            <div className='row'>
                <div className={'col-12'}>
                    <Card>
                        <CardImg width='100%' object src={dish.image} alt={dish.name}/>
                        <CardBody>
                            <CardTitle> {dish.name}</CardTitle>
                            <CardText> {dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>

            </div>
        )
    }


    if (dish != null) {
        const renderComments = dish.comments.map((comment) => {
            if(dish.comments!= null){
                let options = { year: 'numeric', month: 'short', day: 'numeric' };
                const date = new Date(comment.date )
                return(
                    <div key={comment.id} className={'row'}>
                        <div className='col-12 m-2'>
                            <div> {comment.comment}</div>
                            <div> -- {comment.author}, {date.toLocaleDateString("en-US", options)}</div>
                        </div>
                    </div>
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