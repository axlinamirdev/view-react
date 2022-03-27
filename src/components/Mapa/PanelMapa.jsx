import { VectorMap } from '@south-paw/react-vector-maps'
import mapa_local from "../../assets/images/mapa-local.svg"

const PanelMapa = ({store, selectedStoreByLocal, jsonLayerMap, mapVector }) => {
    

    const layerProps = {
        onClick: ({ target }) => {
            jsonLayerMap.layers.forEach(element => {
                mapVector.current.querySelector("svg").querySelector('path[id='+element.id+']').setAttribute("class","locals")
            })
            selectedStoreByLocal(target.attributes.id.value)

        }
      };
   
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-mapa" ref={mapVector}>
                    <img src={mapa_local}  alt="Mapa" />
                    <VectorMap 
                        {...jsonLayerMap}  
                        checkedLayers={[store?.mapaIdLocals]} 
                        className="mapa-local"  
                        layerProps={layerProps} 
                    />   
                </div>
            </div>
        </div>
    )
}

export default PanelMapa