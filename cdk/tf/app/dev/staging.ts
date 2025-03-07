import { BaseApp } from '@/base-app'
import { provisionCluster } from '@/provisioners/cluster'

const app = new BaseApp('dev/staging')

provisionCluster(app)
