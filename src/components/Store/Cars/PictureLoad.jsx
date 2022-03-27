import { useState, useEffect } from "react"
import {ItemPicture} from "./ItemPicture"
import { FaPlus, FaMinus } from 'react-icons/fa'

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"
const MEASURES_PHOTO = process.env.REACT_APP_MEASURES_CAR

const PictureLoad = ({ register, deleteRowPhoto, addRowPhoto, listPhoto, onChangeFile, movePicture }) => {
    
    const [ photos, setPhotos ] = useState([])


    useEffect(() => {
        setPhotos(listPhoto)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listPhoto.length])

    return (
        <DragDropContext onDragEnd={(result) => {
            const { source, destination } = result;
            if (!destination) {
                return;
            }
            if (
                source.index === destination.index &&
                source.droppableId === destination.droppableId
            ) {
                return;
            }

            setPhotos((prevPhotos) =>
            movePicture(prevPhotos, source.index, destination.index)
            )
        }}>
            <Droppable droppableId="photo-car">
            { (droppableProvided) => (
                <div
                    {...droppableProvided.droppableProps}
                    ref={droppableProvided.innerRef}
                    className="photo-car-container"
                >
                {photos.length>0 && 
                    photos.map((item, index) => (
                        <div key={item.id}>
                            { (index===0 || index===1) && (
                                <p className="text-imagen__info">
                                    {index===0 ? "Imagen Principal" : "Imágenes Secundaria"} {`(Tamaño ${MEASURES_PHOTO})`}</p>
                            )}
                            <Draggable draggableId={item.id} index={index}>
                                {(draggableProvided) => (
                                    <div 
                                        {...draggableProvided.draggableProps}
                                        ref={draggableProvided.innerRef}
                                        {...draggableProvided.dragHandleProps}
                                        key={index} 
                                        className="picture__container picture__border-bottom mt-4"
                                    >
                                        <ItemPicture 
                                            register={register}
                                            item={item}
                                            id={`sPhotos[${index}]`}
                                            name={`sPhotos[${index}]`}
                                            onChangeFile={onChangeFile}
                                            index={index}
                                        />
                                        <div className="icon-plus__container">
                                                {index===photos.length-1 &&
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-orange mr-2 btn-circle-danger"
                                                        onClick={()=>addRowPhoto()}
                                                    ><FaPlus /></button>
                                                }
                                                {photos.length>1 && 
                                                    <button 
                                                        type="button" 
                                                        className="btn btn-danger btn-circle-delete "
                                                        onClick={()=>deleteRowPhoto(index)}
                                                    ><FaMinus /> </button>
                                                }
                                            
                                        </div>
                                    </div>
                                )}
                            </Draggable>
                        </div>
                    ))
                }
                 {droppableProvided.placeholder}
                </div>
            )}
            </Droppable>
        </DragDropContext>
    )
}

export default PictureLoad