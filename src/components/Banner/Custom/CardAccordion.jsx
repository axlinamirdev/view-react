import { Accordion, Card, useAccordionToggle } from "react-bootstrap"
import Arrow from '../../../assets/images/down-arrow-2.svg'

const CardAccordion =({ title, index, activeKey, children }) => {

    const CustomerHead = ({children, eventKey, callback}) => {
        
        const decoratedOnClick = useAccordionToggle(
           eventKey,
           () => callback && callback(eventKey),
         );
       return (<div className="accordion-header card-header d-flex w-100 justify-content-between pl-5 pr-5" 
                    onClick={decoratedOnClick}>
                   <p className="accordion-header__title">{children}</p>
                   <img 
                        src={Arrow} 
                        alt=""  
                        className={`accordion-quote__imagen ${activeKey === eventKey ? "accordion-quote__imagen-top" : "accordion-quote__imagen-bottom"}`}/>
               </div>)
     }

    return (
        <Card className="mb-5">
            <CustomerHead as={Card.Header} eventKey={`${index}`}>
                {title}
            </CustomerHead>
            <Accordion.Collapse eventKey={`${index}`}>
                <Card.Body className="pl-5 pr-5">
                    {children}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default CardAccordion