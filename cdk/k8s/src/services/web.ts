import { BaseApp } from '@/base-app'
import { BaseChart } from './base-chart'
import { Deployment } from 'cdk8s-plus-30'
import { BackendApp } from '@repo/config'

const app = BackendApp.Web

export class WebChart extends BaseChart {
    constructor(cluster: BaseApp) {
        super(cluster, app)

        const deployment = new Deployment(this, app, {
            metadata: {
                name: app,
            },
            replicas: 1,
            containers: [
                {
                    image: 'nginx:latest',
                    ports: [{ number: 80 }],
                },
            ],
        })

        deployment.exposeViaService({
            name: app,
            ports: [
                {
                    port: 80,
                    targetPort: 80,
                },
            ],
        })
    }
}
