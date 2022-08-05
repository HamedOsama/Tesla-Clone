import CloseIcon from '@mui/icons-material/Close';
import style from './CloseWrapper.module.css'

const CloseWrapper = props => {
  return (
    <div className={style.close_wrapper}>
      <button onClick={props.onClick} className={style['btn-close']}>
        <CloseIcon />
      </button>
    </div>
  )
}

export default CloseWrapper