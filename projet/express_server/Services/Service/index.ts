import * as express from 'express';

export interface Service {
    register_callbacks(express_app : express.Application);
}