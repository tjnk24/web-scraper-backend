import {VersioningType} from '@nestjs/common';
import {NestFactory} from '@nestjs/core';

import {AppModule} from './app.module';

const bootstrap = async () => {
    const app = await NestFactory.create(AppModule);

    app.enableVersioning({
        type: VersioningType.URI,
        defaultVersion: '1',
    });

    await app.listen(3000);
};

void bootstrap();
