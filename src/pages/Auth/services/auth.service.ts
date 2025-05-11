import { API_URL } from "../../../core/constants"
import { UserValuesModel } from "../../../core/models"

const CREDENTIALS = {
    document: "30216147",
    phone: "513021614",
}

export const CREDENTIALS_ERRORS = {
    document: "ERROR-DOCUMENT-CREDENTIAL",
    phone: "ERROR-PHONE-CREDENTIAL",
}

export const verifyCredentials = (numDocument: string, numPhone: string) => {
    if (numDocument !== CREDENTIALS.document) {
        throw new Error(CREDENTIALS_ERRORS.document)
    }
    if (numPhone !== CREDENTIALS.phone) {
        throw new Error(CREDENTIALS_ERRORS.phone)
    }
}

export const getUserValue = async () => {
    try {
        const URL = `${API_URL}/api/user.json`;
        const response = await fetch(URL, { method: "GET" });
        const data = await response.json();
        return Promise.resolve(new UserValuesModel(data))
    } catch (err) {
        return Promise.reject(err)
    }
}
