import {Media, Card, CardImg, CardImgOverlay, CardTitle, CardText, CardBody, ListGroupItem} from "reactstrap";
import {useState} from "react";


function RenderComments({comment, date}){
    return (
        <ul key={comment.id} className={'list-unstyled'}>
            <li>
                <div> {comment.comment}</div>
                <div> -- {comment.author}, {date}</div>
            </li>
        </ul>
    )
}

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
        const getComments = dish.comments.map((comment) => {
            if(dish.comments!= null){
                let options = { year: 'numeric', month: 'short', day: '2-digit'};
                const date = new Intl.DateTimeFormat('en-US', options).format(new Date(Date.parse(comment.date)))
                return <RenderComments comment={comment} date={date}/>
            }
            else{ return <div> </div>}
        })

        return (
            <div className={'container'}>
                <div className='row'>
                    <div className='col-12 col-md-5 m-1'>
                        {renderDishes()}
                    </div>
                    <div  className='col-12 col-md-5 m-1'>
                        <h4> Comments</h4>
                        {getComments}
                    </div>
                </div>
            </div>
        )
    } else {
        return <div> </div>
    }
}
 export default DishDetail;