import {http} from './config'

export default {
    carregar: () => {
        return http.get("/product/list/8/1")
    }
}
