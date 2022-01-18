import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { EthersConnectModule } from 'src/ethersConnect/ethersConnect.module'
import { UtilsModule } from 'src/utils/utils.module'
import { WardenswapModule } from 'src/wardenswap/wardenswap.module'
import { BotManagerService } from './bot-manager.service'
import { BotManagerController } from './bot-manager.controller'
import { BotManagerTaskService } from './bot-manager.task'

@Module({
  imports: [ConfigModule, EthersConnectModule, UtilsModule, WardenswapModule],
  providers: [BotManagerService, BotManagerTaskService],
  controllers: [BotManagerController]
})
export class BotManagerModule {}