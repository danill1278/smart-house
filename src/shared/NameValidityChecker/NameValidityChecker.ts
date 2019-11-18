import { regex } from "../constants";
import Logger from '../../Utilities/Logger/Logger';

const NameValidityChecker = (name: string): boolean => {
    name = name.trim();
    const result = regex.test(name);
    if (!result) {
      Logger.error("Name must include more than 5 characters");
      return false;
    } else {
        return true;
    }        
};

export default NameValidityChecker;