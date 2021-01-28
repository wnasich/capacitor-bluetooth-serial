var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin, registerWebPlugin } from '@capacitor/core';
import { OptionsRequiredError } from './utils/errors';
export class BluetoothSerialWeb extends WebPlugin {
    constructor() {
        super({
            name: 'BluetoothSerial',
            platforms: ['web'],
        });
    }
    isEnabled() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    enable() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    scan() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('Method not implemented.');
        });
    }
    connect(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    connectInsecure(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    disconnect(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    isConnected(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    read(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    readUntil(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    enableNotifications(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
    disableNotifications(options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options) {
                return Promise.reject(new OptionsRequiredError());
            }
            throw new Error('Method not implemented.');
        });
    }
}
const BluetoothSerial = new BluetoothSerialWeb();
export { BluetoothSerial };
registerWebPlugin(BluetoothSerial);
//# sourceMappingURL=web.js.map