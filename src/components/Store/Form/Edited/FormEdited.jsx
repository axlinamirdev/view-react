import FormMain from "./Custom/FormMain"
import FormaLoadPicture from "./Custom/FormaLoadPicture"
import FormDescription from "./Custom/FormDescription"
import PanelCategory from "./Custom/PanelCategory"
import PanelLocals from "./Custom/PanelLocals"
import PanelTelephone from "./Custom/PanelTelephone"
import PanelEmail from "./Custom/PanelEmail"
import pictureDefault from "../../../../assets/images/camara-fotografica.svg"

import { useEditStore } from '../../../../hooks/Store/useEditStore'
import icon_edit from '../../../../assets/images/edit.svg'
import icon_save from '../../../../assets/images/save.png'
import { useSelector } from 'react-redux'

const MEASURES_MOBILE = process.env.REACT_APP_MEASURES_MOBILE
const MEASURES_DESKTOP = process.env.REACT_APP_MEASURES_DESKTOP
const MEASURES_ICON = process.env.REACT_APP_MEASURES_ICON

const FormEdited = ({ toast }) => {

	 
	 const { config, storeAll  } = useSelector((state) => {
        return {
            config: state.config,
            storeAll: state.storeAll
        }
    })
    const { categories } = config
    const { storeSelected, panelEditStore, listLocals	} = storeAll


	const {
		disabledPanel,
		fileNameLogo, 
		setFileNameLogo,
		fileNameCover, 
		setFileNameCover,
		fileNameCoverMobile,
		setFileNameCoverMobile
	} = useEditStore(toast)

	return (
		<>		
			<div className="row">
				<div className="col-6">
					<FormMain
						storeSelected={storeSelected}
						status={panelEditStore.main}
						disabledPanel={disabledPanel}
						toast={toast}
					/>
				</div>
				<div className="col-6">
					<FormaLoadPicture
						key={0}
						pictureMain={storeSelected?.icon_logo || pictureDefault}
						icon_edit={icon_edit}
						icon_save={icon_save}
						status={panelEditStore.icon}
						disabledPanel={disabledPanel}
						toast={toast}
						title={`Logo (Tamaño ${MEASURES_ICON})`} 
						typePicture="icon" 
						fileNameLogo={fileNameLogo}
						setFileNameLogo={setFileNameLogo} 
						name="icon_logo_file"
						measure={MEASURES_ICON}
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-6">
					<FormaLoadPicture
						key={0}
						pictureMain={storeSelected?.front_cover || pictureDefault}
						icon_edit={icon_edit}
						icon_save={icon_save}
						status={panelEditStore.cover_desktop}
						disabledPanel={disabledPanel}
						toast={toast}
						title={`Portada Escritorio (Tamaño ${MEASURES_DESKTOP})`} 
						typePicture="cover_desktop" 
						fileNameLogo={fileNameCover}
						setFileNameLogo={setFileNameCover} 
						name="cover_desktop_file"
						measure={MEASURES_DESKTOP}
					/>
				</div>
				<div className="col-6">
					<FormaLoadPicture
						key={1}
						pictureMain={storeSelected?.front_cover_mobile || pictureDefault}
						icon_edit={icon_edit}
						icon_save={icon_save}
						status={panelEditStore.cover_mobile}
						disabledPanel={disabledPanel}
						toast={toast}
						title={`Portada Móvil (Tamaño ${MEASURES_MOBILE})`} 
						typePicture="cover_mobile" 
						fileNameLogo={fileNameCoverMobile}
						setFileNameLogo={setFileNameCoverMobile} 
						name="cover_mobile_file"
						measure={MEASURES_MOBILE}
					/>
				</div>
			</div>

			<div className="row">
				<div className="col-6">
					<PanelCategory
						defaulValues={{sCategories: storeSelected?.sCategories}}
						toast={toast}
						status={panelEditStore.category}
						listado={categories}
						disabledPanel={disabledPanel}
					/>
				</div>
				<div className="col-6">
					<PanelLocals
						defaulValues={{sLocals: storeSelected?.sLocals}}
						toast={toast}
						status={panelEditStore.local}
						listado={listLocals}
						disabledPanel={disabledPanel}
					/>
				</div>
			</div>
			
			{Object.keys(storeSelected?.iTelephone).length>0 && storeSelected?.iTelephone[0]?.telephone1!=="" && (
				<PanelTelephone
					defaulValues={{iTelephone: storeSelected?.iTelephone}}
					toast={toast}
					status={panelEditStore.telephone}
					disabledPanel={disabledPanel}
				/>
			)}
			
			{Object.keys(storeSelected?.iEmail).length>0 && storeSelected?.iEmail[0]?.email1!=="" && (
				<PanelEmail
					defaulValues={{iEmail: storeSelected?.iEmail}}
					toast={toast}
					status={panelEditStore.email}
					disabledPanel={disabledPanel}
				/>
			)}

			<FormDescription
				description={storeSelected?.description}
				icon_edit={icon_edit}
				icon_save={icon_save}
				status={panelEditStore.description}
				disabledPanel={disabledPanel}
				toast={toast}
			/>
		</>
	)
}

export default FormEdited