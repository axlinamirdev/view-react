import { useBannerHidden } from "../../hooks/Banner/useBannerHidden"

const FormHiddenBanner = ({ index, banner, toast }) => {

	const {  register, changeHidden } = useBannerHidden(banner, toast)

	return (
		<form>
			<div className="row">
                <div className="col-12 mt-5">
                    <p className="form__label">¿Quieres ocultar el banner?</p>
                    <section className="banner-scheduled">
                        <div className="banner-scheduled__option">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id={`is_banner_hidden_id_si_${index}`} 
                                name="is_banner_hidden_id" 
                                value={true}
                                onChange={(event) => changeHidden(event, index, banner)}
                                ref={register}
                                defaultChecked={banner?.is_banner_hidden_id===true ? true : false}
                            />
                            <label className="form-check-label" htmlFor={`is_banner_hidden_id_si_${index}`} >Si</label>
                        </div>
                        <div className="banner-scheduled__option">
                            <input 
                                type="radio" 
                                className="form-check-input" 
                                id={`is_banner_hidden_id_no_${index}`} 
                                name="is_banner_hidden_id"
                                value={false}
                                onChange={(event) => changeHidden(event, index, banner)}
                                ref={register}
                                defaultChecked={banner?.is_banner_hidden_id===false ? true : false}
                            />
                            <label className="form-check-label" htmlFor={`is_banner_hidden_id_no_${index}`} >No</label>
                        </div>
                    </section>
                </div>
            </div>
	    </form>
	)
}

export default FormHiddenBanner