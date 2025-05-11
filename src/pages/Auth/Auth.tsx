import { useState } from 'react';
import './Auth.scss';
import './Auth-mobile.scss';
import familyImage from '../../assets/img/family.png';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import type { IFormAuth } from '../../core/interfaces/auth.interface';
import RmInputSelect from '../../components/input-select/RmInputSelect';
import RmSeparator from '../../components/separator/RmSeparator';
import RmInput from '../../components/input/RmInput';
import RmCheckbox from '../../components/checkbox/RmCheckbox';
import RmButton from '../../components/button/RmButton';
import { CREDENTIALS_ERRORS, getUserValue, verifyCredentials } from './services';
import type { IUserAuth } from '../../core/store/types';
import { useNavigate } from 'react-router-dom';
import { SESSION_STORAGE } from '../../core/constants';
import { useUserAuthStore } from '../../core/hooks';


const Auth: React.FC = () => {
  const navigation = useNavigate();
  const { setUser } = useUserAuthStore();
  //Estados para la data del formulario
  const [form, setForm] = useState<IFormAuth>({
    numberCellPhone: '',
    numberDocument: '',
    isComunicationPolicy: false,
    isPrivacyPolicy: false,
  })

  //Estado para el error de la validacion de data
  const[errors, setErrors] = useState({
    numberCellPhone: '',
    numberDocument: '',
    isComunicationPolicy: '',
    isPrivacyPolicy: ''
  })

  //Estado para el loading del spinner
  const[isLoading, setIsLoading] = useState<boolean>(false)

  //Funcion para la validacion de de inputs segun su caso particular
  const validateInput = (field: string, value: string | boolean) => {
    let error = "";

    switch (field) {
      case "numberDocument":
        if (value.toString().length>0 && value.toString().length<8) {
          error = 'El número de documento debe tener al menos 8 caracteres.';
        } else if (value.toString().length == 0){
          error= ''
        } else if (value.toString().length > 8){
          error= 'Coloque un numero de documento verdadero.'
        }
        break;
      case "numberCellPhone":
        if (value.toString().length >0 && value.toString().length < 9) {
          error = 'El número de celular debe tener al menos 9 caracteres.';
        } else if (value.toString().length == 0) {
          error = ''
        } else if (value.toString().length > 9) {
          error = 'El número de celular no es valido.'
        }
        break;
      case "isPrivacyPolicy":
        if (!value) {
          error = "Debe aceptar la Política de Privacidad.";
        }
        break;
      case "isComunicationPolicy":
        if (!value) {
          error = "Debe aceptar la Política de Comunicaciones Comerciales.";
        }
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  const userValues = async () => {
    try {
      setIsLoading(true);
      setErrors({
        numberDocument: "",
        numberCellPhone: "",
        isPrivacyPolicy: "",
        isComunicationPolicy: "",
      });

      verifyCredentials(form.numberDocument, form.numberCellPhone);
      const user = await getUserValue();
      const userAuth: IUserAuth = {
        loggued: true,
        numberCellPhone: form.numberCellPhone,
        numberDocument: form.numberDocument,
        name: user.name,
        lastName: user.lastName,  
        birthDay: user.birthDay,
      };

      setUser(userAuth);
      navigation("/dashboard");
      sessionStorage.setItem(
        SESSION_STORAGE.TOKEN_AUTH,
        JSON.stringify(userAuth)
      );
    } catch (error: any) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        numberDocument: CREDENTIALS_ERRORS["document"] === error?.message ? "Documento incorrecto." : "",
        numberCellPhone: CREDENTIALS_ERRORS["phone"] === error?.message ? "Número de celular incorrecto." : "",
      }));
    }
    setIsLoading(false);
  };

  return (
    <>
    <Header />
    <div className="container-auth">
        <div className="container-auth__family">
          <img src={familyImage} alt="img-family" />
        </div>
        <div className="container-auth__form">
          <div className="form-width caf-header">
            <div className="caf-header__description">
              <div className="caf-header__description__dot">
                Seguro Salud Flexible
              </div>
              <div className="caf-header__description__family">
                Creado para ti y tu familia
              </div>
            </div>
            <img src={familyImage} alt="img-family" />
          </div>
          <div className="form-width container-auth__form__separator"></div>
          <div className="form-width container-auth__form__message">
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría, 100% online.
          </div>
          <div className="form-width container-auth__form__inputs">
            <RmInputSelect
              value={form.numberDocument}
              label="Nro. de documento"
              placeholder="Nro. de documento"
              type="number"
              changeValue={(numberDocument) => {
                setForm({ ...form, numberDocument });
                validateInput("numberDocument", numberDocument);
              }}
            />
            {errors.numberDocument && (
              <span className="message-error-form">*{errors.numberDocument}</span>
            )}
            <RmSeparator height={15} />
            <RmInput
              value={form.numberCellPhone}
              label="Celular"
              placeholder="Celular"
              type="number"
              changeValue={(numberCellPhone) => {
                setForm({ ...form, numberCellPhone });
                validateInput("numberCellPhone", numberCellPhone);
              }}
            />
            {errors.numberCellPhone && (
              <span className="message-error-form">*{errors.numberCellPhone}</span>
            )}
            <RmSeparator height={20} />
            <RmCheckbox
              value={form.isPrivacyPolicy}
              label="Acepto la Política de Privacidad"
              changeValue={(isPrivacyPolicy) => {
                setForm({ ...form, isPrivacyPolicy });
                validateInput("isPrivacyPolicy", isPrivacyPolicy);
              }}
            />
            {errors.isPrivacyPolicy && (
              <span className="message-error-form">{errors.isPrivacyPolicy}</span>
            )}
            <RmSeparator height={10} />
            <RmCheckbox
              value={form.isComunicationPolicy}
              label="Acepto la Política de Comunicaciones Comerciales"
              changeValue={(isComunicationPolicy) => {
                setForm({ ...form, isComunicationPolicy });
                validateInput("isComunicationPolicy", isComunicationPolicy);
              }}
            />
            {errors.isComunicationPolicy && (
              <span className="message-error-form">{errors.isComunicationPolicy}</span>
            )}
            <RmSeparator height={8} />
            <span className="termins-conditions cp">
              Aplican Términos y Condiciones.
            </span>
            <RmSeparator height={20} />
            <div className="container-ca-button">
  <RmButton
    label="Cotiza aquí"
    changeButton={() => userValues()}
    disabled={isLoading || !form.isPrivacyPolicy || !form.isComunicationPolicy} // 🔥 Bloquea el botón si no están marcados
    size={window.innerWidth >= 500 ? "l" : "m"}
    theme="secondary"
  />
  {errors.isPrivacyPolicy || errors.isComunicationPolicy ? ( // 🔥 Si falta marcar una política, muestra el mensaje
    <span className="message-error-form">
      * Debe aceptar ambas políticas antes de continuar.
    </span>
  ) : null}
</div>

            <RmSeparator height={10} />
            <RmSeparator height={20} />
          </div>
        </div>
      </div>
    <RmSeparator height={90} />
    <Footer />
  </>
  );
};

export default Auth;
