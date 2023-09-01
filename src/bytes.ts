import { Bytes } from '@tendermint/types';
import Buffer from 'buffer';
import { encode, decode } from '@haribala/text-encoder-utf-8';

/**
 * Decode a string from bytes.
 *
 * @param   bytes - bytes to decode as a string
 *
 * @returns string decoded from bytes
 * @throws  will throw if decoding fails
 */
export function bytesToString (bytes: Bytes): string {
    return decode(bytes);
}

/**
 * Encode a string as bytes.
 *
 * @param   string - string to encode as bytes
 *
 * @returns bytes encoded from string
 * @throws  will throw if encoding fails
 */
export function stringToBytes (string: string): Bytes {
    return encode(string);
}

/**
 * Convert a Buffer to bytes.
 *
 * @param   buffer - Buffer to convert to bytes
 *
 * @returns bytes converted from Buffer
 */
export function bufferToBytes (buffer: Buffer): Bytes {
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength / Uint8Array.BYTES_PER_ELEMENT);
}
