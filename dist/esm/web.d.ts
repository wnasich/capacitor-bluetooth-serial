import { WebPlugin } from '@capacitor/core';
import { BluetoothSerialPlugin } from './definitions';
export declare class BluetoothSerialWeb extends WebPlugin implements BluetoothSerialPlugin {
    constructor();
    isEnabled(): Promise<import('./definitions').BluetoothEnabledResult>;
    enable(): Promise<import('./definitions').BluetoothEnabledResult>;
    scan(): Promise<import('./definitions').BluetoothScanResult>;
    connect(options: import('./definitions').BluetoothConnectOptions): Promise<void>;
    connectInsecure(options: import('./definitions').BluetoothConnectOptions): Promise<void>;
    disconnect(options: import('./definitions').BluetoothConnectOptions): Promise<void>;
    isConnected(options: import('./definitions').BluetoothConnectOptions): Promise<import('./definitions').BluetoothConnectResult>;
    read(options: import('./definitions').BluetoothReadOptions): Promise<import('./definitions').BluetoothDataResult>;
    readUntil(options: import('./definitions').BluetoothReadUntilOptions): Promise<import('./definitions').BluetoothDataResult>;
    write(options: import('./definitions').BluetoothWriteOptions): Promise<void>;
    enableNotifications(options: import('./definitions').BluetoothEnableNotificationsOptions): Promise<import('./definitions').BluetoothEnableNotificationsResult>;
    disableNotifications(options: import('./definitions').BluetoothDisableNotificationsOptions): Promise<void>;
}
declare const BluetoothSerial: BluetoothSerialWeb;
export { BluetoothSerial };
