/**
 * DbObject class. Base class for all classes used in repository
 */
import { ObjectId } from 'mongodb';
export class DbObject {
    public _id?: ObjectId;
}

export { ObjectId };